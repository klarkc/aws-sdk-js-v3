import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { DeleteSkillGroupRequest, DeleteSkillGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteSkillGroupCommandInput extends DeleteSkillGroupRequest {}
export interface DeleteSkillGroupCommandOutput extends DeleteSkillGroupResponse, __MetadataBearer {}
/**
 * <p>Deletes a skill group by skill group ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, DeleteSkillGroupCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, DeleteSkillGroupCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new DeleteSkillGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSkillGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteSkillGroupCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteSkillGroupCommand extends $Command<
  DeleteSkillGroupCommandInput,
  DeleteSkillGroupCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  readonly input: DeleteSkillGroupCommandInput;
  constructor(input: DeleteSkillGroupCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteSkillGroupCommandInput, DeleteSkillGroupCommandOutput>;
  private serialize;
  private deserialize;
}
