import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { DetectStackResourceDriftInput, DetectStackResourceDriftOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DetectStackResourceDriftCommandInput extends DetectStackResourceDriftInput {}
export interface DetectStackResourceDriftCommandOutput extends DetectStackResourceDriftOutput, __MetadataBearer {}
/**
 * <p>Returns information about whether a resource's actual configuration differs, or has
 *             <i>drifted</i>, from it's expected configuration, as defined in the stack
 *          template and any values specified as template parameters. This information includes actual
 *          and expected property values for resources in which AWS CloudFormation detects drift. Only resource
 *          properties explicitly defined in the stack template are checked for drift. For more
 *          information about stack and resource drift, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting
 *             Unregulated Configuration Changes to Stacks and Resources</a>.</p>
 *          <p>Use <code>DetectStackResourceDrift</code> to detect drift on individual resources, or
 *             <a>DetectStackDrift</a> to detect drift on all resources in a given stack
 *          that support drift detection.</p>
 *          <p>Resources that do not currently support drift detection cannot be checked. For a list
 *          of resources that support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DetectStackResourceDriftCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DetectStackResourceDriftCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DetectStackResourceDriftCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetectStackResourceDriftCommandInput} for command's `input` shape.
 * @see {@link DetectStackResourceDriftCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DetectStackResourceDriftCommand extends $Command<
  DetectStackResourceDriftCommandInput,
  DetectStackResourceDriftCommandOutput,
  CloudFormationClientResolvedConfig
> {
  readonly input: DetectStackResourceDriftCommandInput;
  constructor(input: DetectStackResourceDriftCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DetectStackResourceDriftCommandInput, DetectStackResourceDriftCommandOutput>;
  private serialize;
  private deserialize;
}
