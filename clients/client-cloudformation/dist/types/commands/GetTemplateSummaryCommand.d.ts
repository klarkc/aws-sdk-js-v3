import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { GetTemplateSummaryInput, GetTemplateSummaryOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetTemplateSummaryCommandInput extends GetTemplateSummaryInput {}
export interface GetTemplateSummaryCommandOutput extends GetTemplateSummaryOutput, __MetadataBearer {}
/**
 * <p>Returns information about a new or existing template. The
 *             <code>GetTemplateSummary</code> action is useful for viewing parameter information, such
 *          as default parameter values and parameter types, before you create or update a stack or
 *          stack set.</p>
 *          <p>You can use the <code>GetTemplateSummary</code> action when you submit a template, or
 *          you can get template information for a stack set, or a running or deleted stack.</p>
 *          <p>For deleted stacks, <code>GetTemplateSummary</code> returns the template information
 *          for up to 90 days after the stack has been deleted. If the template does not exist, a
 *             <code>ValidationError</code> is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, GetTemplateSummaryCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, GetTemplateSummaryCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new GetTemplateSummaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTemplateSummaryCommandInput} for command's `input` shape.
 * @see {@link GetTemplateSummaryCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetTemplateSummaryCommand extends $Command<
  GetTemplateSummaryCommandInput,
  GetTemplateSummaryCommandOutput,
  CloudFormationClientResolvedConfig
> {
  readonly input: GetTemplateSummaryCommandInput;
  constructor(input: GetTemplateSummaryCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetTemplateSummaryCommandInput, GetTemplateSummaryCommandOutput>;
  private serialize;
  private deserialize;
}
