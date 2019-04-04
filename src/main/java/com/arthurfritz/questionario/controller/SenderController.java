package com.arthurfritz.questionario.controller;

import com.arthurfritz.questionario.dto.ItemResponseDTO;
import com.arthurfritz.questionario.dto.NewSenderDTO;
import com.arthurfritz.questionario.dto.ResponseSenderDTO;
import com.arthurfritz.questionario.entity.Status;
import com.arthurfritz.questionario.service.SenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/sender")
public class SenderController {

    @Autowired
    private SenderService senderService;

    @PostMapping
    public ResponseSenderDTO newSender(@RequestBody NewSenderDTO newSenderDTO) {
        return senderService.newSender(newSenderDTO);
    }

    @PutMapping("/{identifier}/{status}")
    public void senderOPen(@PathVariable String identifier, @PathVariable Status status) {
        senderService.changeStatus(identifier, status);
    }

    @GetMapping
    public List<ItemResponseDTO> getAll() {
        return senderService.getAllReports();
    }

}
