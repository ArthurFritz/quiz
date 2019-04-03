package com.arthurfritz.questionario.controller;

import com.arthurfritz.questionario.dto.ResponseDTO;
import com.arthurfritz.questionario.service.ResponseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1/response")
public class ResponseController {

    @Autowired
    private ResponseService responseService;

    @PutMapping("/{identifier}")
    public ResponseDTO responseSend(@PathVariable String identifier, @RequestBody ResponseDTO responseDTO) {
        return responseService.responseSend(identifier,responseDTO);
    }

    @GetMapping("/{identifier}")
    public ResponseDTO responseSend(@PathVariable String identifier){
        return responseService.getResponse(identifier);
    }
}
