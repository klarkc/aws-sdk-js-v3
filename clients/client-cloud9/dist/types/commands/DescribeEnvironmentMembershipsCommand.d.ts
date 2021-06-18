import { Cloud9ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Cloud9Client";
import { DescribeEnvironmentMembershipsRequest, DescribeEnvironmentMembershipsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DescribeEnvironmentMembershipsCommandInput extends DescribeEnvironmentMembershipsRequest {}
export interface DescribeEnvironmentMembershipsCommandOutput
  extends DescribeEnvironmentMembershipsResult,
    __MetadataBearer {}
/**
 * <p>Gets information about environment members for an AWS Cloud9 development environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Cloud9Client, DescribeEnvironmentMembershipsCommand } from "@aws-sdk/client-cloud9"; // ES Modules import
 * // const { Cloud9Client, DescribeEnvironmentMembershipsCommand } = require("@aws-sdk/client-cloud9"); // CommonJS import
 * const client = new Cloud9Client(config);
 * const command = new DescribeEnvironmentMembershipsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEnvironmentMembershipsCommandInput} for command's `input` shape.
 * @see {@link DescribeEnvironmentMembershipsCommandOutput} for command's `response` shape.
 * @see {@link Cloud9ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeEnvironmentMembershipsCommand extends $Command<
  DescribeEnvironmentMembershipsCommandInput,
  DescribeEnvironmentMembershipsCommandOutput,
  Cloud9ClientResolvedConfig
> {
  readonly input: DescribeEnvironmentMembershipsCommandInput;
  constructor(input: DescribeEnvironmentMembershipsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Cloud9ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEnvironmentMembershipsCommandInput, DescribeEnvironmentMembershipsCommandOutput>;
  private serialize;
  private deserialize;
}
