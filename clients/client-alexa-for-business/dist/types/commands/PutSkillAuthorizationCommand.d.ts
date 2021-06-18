import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { PutSkillAuthorizationRequest, PutSkillAuthorizationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface PutSkillAuthorizationCommandInput extends PutSkillAuthorizationRequest {}
export interface PutSkillAuthorizationCommandOutput extends PutSkillAuthorizationResponse, __MetadataBearer {}
/**
 * <p>Links a user's account to a third-party skill provider. If this API operation is
 *          called by an assumed IAM role, the skill being linked must be a private skill. Also, the
 *          skill must be owned by the AWS account that assumed the IAM role.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, PutSkillAuthorizationCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, PutSkillAuthorizationCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new PutSkillAuthorizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutSkillAuthorizationCommandInput} for command's `input` shape.
 * @see {@link PutSkillAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutSkillAuthorizationCommand extends $Command<
  PutSkillAuthorizationCommandInput,
  PutSkillAuthorizationCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  readonly input: PutSkillAuthorizationCommandInput;
  constructor(input: PutSkillAuthorizationCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutSkillAuthorizationCommandInput, PutSkillAuthorizationCommandOutput>;
  private serialize;
  private deserialize;
}
