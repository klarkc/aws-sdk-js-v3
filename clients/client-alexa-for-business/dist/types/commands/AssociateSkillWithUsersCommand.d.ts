import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { AssociateSkillWithUsersRequest, AssociateSkillWithUsersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface AssociateSkillWithUsersCommandInput extends AssociateSkillWithUsersRequest {}
export interface AssociateSkillWithUsersCommandOutput extends AssociateSkillWithUsersResponse, __MetadataBearer {}
/**
 * <p>Makes a private skill available for enrolled users to enable on their devices.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, AssociateSkillWithUsersCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, AssociateSkillWithUsersCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new AssociateSkillWithUsersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateSkillWithUsersCommandInput} for command's `input` shape.
 * @see {@link AssociateSkillWithUsersCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateSkillWithUsersCommand extends $Command<
  AssociateSkillWithUsersCommandInput,
  AssociateSkillWithUsersCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  readonly input: AssociateSkillWithUsersCommandInput;
  constructor(input: AssociateSkillWithUsersCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateSkillWithUsersCommandInput, AssociateSkillWithUsersCommandOutput>;
  private serialize;
  private deserialize;
}
