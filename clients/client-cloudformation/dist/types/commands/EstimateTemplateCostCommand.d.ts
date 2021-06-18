import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { EstimateTemplateCostInput, EstimateTemplateCostOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface EstimateTemplateCostCommandInput extends EstimateTemplateCostInput {}
export interface EstimateTemplateCostCommandOutput extends EstimateTemplateCostOutput, __MetadataBearer {}
/**
 * <p>Returns the estimated monthly cost of a template. The return value is an AWS Simple
 *          Monthly Calculator URL with a query string that describes the resources required to run the
 *          template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, EstimateTemplateCostCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, EstimateTemplateCostCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new EstimateTemplateCostCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EstimateTemplateCostCommandInput} for command's `input` shape.
 * @see {@link EstimateTemplateCostCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class EstimateTemplateCostCommand extends $Command<
  EstimateTemplateCostCommandInput,
  EstimateTemplateCostCommandOutput,
  CloudFormationClientResolvedConfig
> {
  readonly input: EstimateTemplateCostCommandInput;
  constructor(input: EstimateTemplateCostCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EstimateTemplateCostCommandInput, EstimateTemplateCostCommandOutput>;
  private serialize;
  private deserialize;
}
