package com.arthurfritz.questionario.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class NewSenderDTO {

    @NotBlank
    private String name;

    @NotBlank
    private String email;

}
