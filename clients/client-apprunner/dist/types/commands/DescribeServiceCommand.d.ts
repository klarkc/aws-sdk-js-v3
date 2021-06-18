import { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import { DescribeServiceRequest, DescribeServiceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DescribeServiceCommandInput extends DescribeServiceRequest {}
export interface DescribeServiceCommandOutput extends DescribeServiceResponse, __MetadataBearer {}
/**
 * <p>Return a full description of an AWS App Runner service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, DescribeServiceCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, DescribeServiceCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const command = new DescribeServiceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeServiceCommandInput} for command's `input` shape.
 * @see {@link DescribeServiceCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeServiceCommand extends $Command<
  DescribeServiceCommandInput,
  DescribeServiceCommandOutput,
  AppRunnerClientResolvedConfig
> {
  readonly input: DescribeServiceCommandInput;
  constructor(input: DescribeServiceCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppRunnerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeServiceCommandInput, DescribeServiceCommandOutput>;
  private serialize;
  private deserialize;
}
