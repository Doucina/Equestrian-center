package com.horse.Projet5AHorse.controller;

import com.horse.Projet5AHorse.model.Admin;
import com.horse.Projet5AHorse.model.Moniteur;
import com.horse.Projet5AHorse.model.Superadmin;
import com.horse.Projet5AHorse.model.User;
import com.horse.Projet5AHorse.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class RegistrationController {

    @Autowired
    private RegistrationService service;

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/api/registeruser")

    public User registerUser(@RequestBody User user) throws Exception {
        String tempEmailId = user.getEmailId();

        if (tempEmailId != null && !"".equals(tempEmailId)) {
            User userobj = service.fetchUserByEmailId(tempEmailId);
            if (userobj != null) {
                throw new Exception("user with "+tempEmailId+" already exists");
            }
        }

        User userObj = null;
        userObj = service.saveUser(user);
        return userObj;
    }


    @PostMapping("/api/registerAdmin")
    public Admin registerAdmin(@RequestBody Admin admin) throws Exception {
        String tempEmailId = admin.getAdminEmailId();
        if (tempEmailId != null && !"".equals(tempEmailId)){
            Admin userobj = (Admin) service.fetchAdminByEmailId(tempEmailId);
            if (userobj != null){
                throw new Exception("admin with " + tempEmailId + " already exists");
            }
        }
        Admin userObj = null;
        userObj = service.saveAdmin(admin);
        return userObj;
    }


    @PostMapping("/api/registerSA")
    public Superadmin registerSA(@RequestBody Superadmin sa) throws Exception {
        String tempEmailId = sa.getSuperadminEmailId();
        if (tempEmailId != null && !"".equals(tempEmailId)){
            Superadmin userobj = service.fetchSAByEmailId(tempEmailId);
            if (userobj != null){
                throw new Exception("SuperAdmin with " + tempEmailId + " already exists");
            }
        }
        Superadmin userObj = null;
        userObj = service.saveSA(sa);
        return userObj;
    }

    @PostMapping("/api/registerMoniteur")
    public Moniteur registerMoniteur(@RequestBody Moniteur moniteur) throws Exception {
        String tempEmailId = moniteur.getMoniteurEmailId();
        if (tempEmailId != null && !"".equals(tempEmailId)){
            Moniteur userobj = service.fetchMoniteurByEmailId(tempEmailId);
            if (userobj != null){
                throw new Exception("Moniteur with " + tempEmailId + " already exists");
            }
        }
        Moniteur userObj = null;
        userObj = service.saveMoniteur(moniteur);
        return userObj;
    }



    @PostMapping("/api/login")
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


    @PostMapping("/api/loginAdmin")
    public Admin loginAdmin (@RequestBody Admin admin) throws Exception {
        String tempEmailId = admin.getAdminEmailId();
        String tempPass = admin.getAdminPassword();
        Admin userObj = null;

        if(tempEmailId != null && tempPass != null){
            userObj = service.fetchAdminByEmailIdAndPassword(tempEmailId, tempPass);
        }
        if (userObj == null){
            throw new Exception("bad credentials");
        }
        return userObj;
    }


    @PostMapping("/api/loginSA")
    public Superadmin loginSA (@RequestBody Superadmin sa) throws Exception {
        String tempEmailId = sa.getSuperadminEmailId();
        String tempPass = sa.getSuperadminPassword();
        Superadmin userObj = null;

        if(tempEmailId != null && tempPass != null){
            userObj = service.fetchSAByEmailIdAndPassword(tempEmailId, tempPass);
        }
        if (userObj == null){
            throw new Exception("bad credentials");
        }
        return userObj;
    }

    @PostMapping("/api/loginMoniteur")
    public Moniteur loginMoniteur (@RequestBody Moniteur moniteur) throws Exception {
        String tempEmailId = moniteur.getMoniteurEmailId();
        String tempPass = moniteur.getMoniteurPassword();
        Moniteur userObj = null;

        if(tempEmailId != null && tempPass != null){
            userObj = service.fetchMoniteurByEmailIdAndPassword(tempEmailId, tempPass);
        }
        if (userObj == null){
            throw new Exception("bad credentials");
        }
        return userObj;
    }
}
