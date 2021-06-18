import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { RejectSkillRequest, RejectSkillResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface RejectSkillCommandInput extends RejectSkillRequest {}
export interface RejectSkillCommandOutput extends RejectSkillResponse, __MetadataBearer {}
/**
 * <p>Disassociates a skill from the organization under a user's AWS account. If the skill
 *          is a private skill, it moves to an AcceptStatus of PENDING. Any private or public skill
 *          that is rejected can be added later by calling the ApproveSkill API. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, RejectSkillCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, RejectSkillCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new RejectSkillCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RejectSkillCommandInput} for command's `input` shape.
 * @see {@link RejectSkillCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RejectSkillCommand extends $Command<
  RejectSkillCommandInput,
  RejectSkillCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  readonly input: RejectSkillCommandInput;
  constructor(input: RejectSkillCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RejectSkillCommandInput, RejectSkillCommandOutput>;
  private serialize;
  private deserialize;
}
