import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { ListStackSetsInput, ListStackSetsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListStackSetsCommandInput extends ListStackSetsInput {}
export interface ListStackSetsCommandOutput extends ListStackSetsOutput, __MetadataBearer {}
/**
 * <p>Returns summary information about stack sets that are associated with the
 *          user.</p>
 *          <ul>
 *             <li>
 *                <p>[Self-managed permissions] If you set the <code>CallAs</code> parameter to <code>SELF</code> while signed in to your AWS account, <code>ListStackSets</code> returns all self-managed stack sets in your AWS account.</p>
 *             </li>
 *             <li>
 *                <p>[Service-managed permissions] If you set the <code>CallAs</code> parameter to <code>SELF</code> while signed in to the organization's management account, <code>ListStackSets</code> returns all stack sets in the management account.</p>
 *             </li>
 *             <li>
 *                <p>[Service-managed permissions] If you set the <code>CallAs</code> parameter to <code>DELEGATED_ADMIN</code> while signed in to your member account, <code>ListStackSets</code> returns all stack sets with service-managed permissions in the management account.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListStackSetsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListStackSetsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new ListStackSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStackSetsCommandInput} for command's `input` shape.
 * @see {@link ListStackSetsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListStackSetsCommand extends $Command<
  ListStackSetsCommandInput,
  ListStackSetsCommandOutput,
  CloudFormationClientResolvedConfig
> {
  readonly input: ListStackSetsCommandInput;
  constructor(input: ListStackSetsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListStackSetsCommandInput, ListStackSetsCommandOutput>;
  private serialize;
  private deserialize;
}
