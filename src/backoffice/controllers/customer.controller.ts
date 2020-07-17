import { Controller, Get, Post, Put, Delete, Param, Body } from "@nestjs/common";
import { Customer } from '../models/customer.model';
import { Result } from '../models/result.model';


@Controller('v1/customers')
export class CustomerController {

  @Get()
  get() {
    return new Result(
      null,
      true,
      [],
      null);
  }

  // o @Param pega todos os parametros da URL, quando passo em 
  //parentesis, estou especificando
  //depois passo o nome do parâmetro 
  @Get(':document')
  getById(@Param('document') document) {
    return new Result(
    null,
    true,
    {},
    null);
  }

  @Post()
  post(@Body() body: Customer) {
    return new Result(
    'Cliente criado com sucesso!', 
    true,
    body,
    null);
  }

  @Put(':document')
  put(@Param('document') document, @Body() body) {
    return new Result(
    'Cliente alterado com sucesso!', 
    true,
    body,
    null);
  }

  @Delete(':document')
  delete(@Param('document') document ) {
    return new Result(
    'Cliente removido com sucesso!', 
    true,
    null,
    null);
  }

} 