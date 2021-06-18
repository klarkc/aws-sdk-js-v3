import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { CreateSkillGroupRequest, CreateSkillGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface CreateSkillGroupCommandInput extends CreateSkillGroupRequest {}
export interface CreateSkillGroupCommandOutput extends CreateSkillGroupResponse, __MetadataBearer {}
/**
 * <p>Creates a skill group with a specified name and description.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, CreateSkillGroupCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, CreateSkillGroupCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new CreateSkillGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSkillGroupCommandInput} for command's `input` shape.
 * @see {@link CreateSkillGroupCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateSkillGroupCommand extends $Command<
  CreateSkillGroupCommandInput,
  CreateSkillGroupCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  readonly input: CreateSkillGroupCommandInput;
  constructor(input: CreateSkillGroupCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSkillGroupCommandInput, CreateSkillGroupCommandOutput>;
  private serialize;
  private deserialize;
}
