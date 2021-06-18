import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { UpdateSkillGroupRequest, UpdateSkillGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UpdateSkillGroupCommandInput extends UpdateSkillGroupRequest {}
export interface UpdateSkillGroupCommandOutput extends UpdateSkillGroupResponse, __MetadataBearer {}
/**
 * <p>Updates skill group details by skill group ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, UpdateSkillGroupCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, UpdateSkillGroupCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new UpdateSkillGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSkillGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateSkillGroupCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateSkillGroupCommand extends $Command<
  UpdateSkillGroupCommandInput,
  UpdateSkillGroupCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  readonly input: UpdateSkillGroupCommandInput;
  constructor(input: UpdateSkillGroupCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateSkillGroupCommandInput, UpdateSkillGroupCommandOutput>;
  private serialize;
  private deserialize;
}
