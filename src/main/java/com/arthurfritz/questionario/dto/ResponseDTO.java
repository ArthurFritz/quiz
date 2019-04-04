package com.arthurfritz.questionario.dto;

import com.arthurfritz.questionario.entity.Status;
import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

@Data
@Builder
public class ResponseDTO {

    @NotNull
    @Size(min = 1)
    private List<String> devs;

    @NotNull
    @Size(min = 1)
    private List<String> tests;

    @NotNull
    @Size(min = 1)
    private List<String> stacks;

    @NotNull
    private Long erros;

    private Status status;

}
