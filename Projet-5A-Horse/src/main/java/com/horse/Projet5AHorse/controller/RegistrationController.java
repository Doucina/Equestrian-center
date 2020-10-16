package com.horse.Projet5AHorse.controller;

import com.horse.Projet5AHorse.model.User;
import com.horse.Projet5AHorse.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class RegistrationController {

    @Autowired
    private RegistrationService service;

    @PostMapping("/registeruser")
    public User registerUser(@RequestBody User user) throws Exception {
        String tempEmailId = user.getEmailId();

        if (tempEmailId != null && "".equals(tempEmailId)) {
            User userobj = service.fetchUserByEmailId(tempEmailId);
            if (userobj != null) {
                throw new Exception("user with "+tempEmailId+" already exists");
            }
        }

        User userObj = null;
        userObj = service.saveUser(user);
        return userObj;
    }

    @PostMapping("login")
    public User loginUser(@RequestBody User user) throws Exception {
        String tempEmailId = user.getEmailId();
        String tempPass = user.getPassword();
        User userObj = null;

        if (tempEmailId != null && tempPass != null){
            userObj = service.fetchUserByEmailAndPassword(tempEmailId, tempPass);
        }

        if (userObj == null) {
            throw new Exception("Bad credentials");
        }
        return userObj;
    }
}
