import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { ApproveSkillRequest, ApproveSkillResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ApproveSkillCommandInput extends ApproveSkillRequest {}
export interface ApproveSkillCommandOutput extends ApproveSkillResponse, __MetadataBearer {}
/**
 * <p>Associates a skill with the organization under the customer's AWS account. If a skill
 *          is private, the user implicitly accepts access to this skill during enablement.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, ApproveSkillCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, ApproveSkillCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new ApproveSkillCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ApproveSkillCommandInput} for command's `input` shape.
 * @see {@link ApproveSkillCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ApproveSkillCommand extends $Command<
  ApproveSkillCommandInput,
  ApproveSkillCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  readonly input: ApproveSkillCommandInput;
  constructor(input: ApproveSkillCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ApproveSkillCommandInput, ApproveSkillCommandOutput>;
  private serialize;
  private deserialize;
}
