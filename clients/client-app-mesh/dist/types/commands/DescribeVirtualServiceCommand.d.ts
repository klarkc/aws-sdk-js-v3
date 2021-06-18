import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { DescribeVirtualServiceInput, DescribeVirtualServiceOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DescribeVirtualServiceCommandInput extends DescribeVirtualServiceInput {}
export interface DescribeVirtualServiceCommandOutput extends DescribeVirtualServiceOutput, __MetadataBearer {}
/**
 * <p>Describes an existing virtual service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, DescribeVirtualServiceCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, DescribeVirtualServiceCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new DescribeVirtualServiceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVirtualServiceCommandInput} for command's `input` shape.
 * @see {@link DescribeVirtualServiceCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeVirtualServiceCommand extends $Command<
  DescribeVirtualServiceCommandInput,
  DescribeVirtualServiceCommandOutput,
  AppMeshClientResolvedConfig
> {
  readonly input: DescribeVirtualServiceCommandInput;
  constructor(input: DescribeVirtualServiceCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppMeshClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeVirtualServiceCommandInput, DescribeVirtualServiceCommandOutput>;
  private serialize;
  private deserialize;
}
