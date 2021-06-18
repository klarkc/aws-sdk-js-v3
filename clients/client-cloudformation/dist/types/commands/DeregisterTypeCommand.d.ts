import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { DeregisterTypeInput, DeregisterTypeOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeregisterTypeCommandInput extends DeregisterTypeInput {}
export interface DeregisterTypeCommandOutput extends DeregisterTypeOutput, __MetadataBearer {}
/**
 * <p>Marks an extension or extension version as <code>DEPRECATED</code> in the CloudFormation registry, removing it from active use. Deprecated extensions or extension versions cannot be used in CloudFormation operations.</p>
 *          <p>To deregister an entire extension, you must individually deregister all active versions of that extension. If an extension has only a single active version, deregistering that version results in the extension itself being deregistered and marked as deprecated in the registry. </p>
 *          <p>You cannot deregister the default version of an extension if there are other active version of that extension. If you do deregister the default version of an extension, the textensionype itself is deregistered as well and marked as deprecated. </p>
 *          <p>To view the deprecation status of an extension or extension version, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html">DescribeType</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DeregisterTypeCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DeregisterTypeCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DeregisterTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterTypeCommandInput} for command's `input` shape.
 * @see {@link DeregisterTypeCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeregisterTypeCommand extends $Command<
  DeregisterTypeCommandInput,
  DeregisterTypeCommandOutput,
  CloudFormationClientResolvedConfig
> {
  readonly input: DeregisterTypeCommandInput;
  constructor(input: DeregisterTypeCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeregisterTypeCommandInput, DeregisterTypeCommandOutput>;
  private serialize;
  private deserialize;
}
