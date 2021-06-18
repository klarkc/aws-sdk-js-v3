import { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import { DescribeCustomDomainsRequest, DescribeCustomDomainsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DescribeCustomDomainsCommandInput extends DescribeCustomDomainsRequest {}
export interface DescribeCustomDomainsCommandOutput extends DescribeCustomDomainsResponse, __MetadataBearer {}
/**
 * <p>Return a description of custom domain names that are associated with an AWS App Runner service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, DescribeCustomDomainsCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, DescribeCustomDomainsCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const command = new DescribeCustomDomainsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCustomDomainsCommandInput} for command's `input` shape.
 * @see {@link DescribeCustomDomainsCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeCustomDomainsCommand extends $Command<
  DescribeCustomDomainsCommandInput,
  DescribeCustomDomainsCommandOutput,
  AppRunnerClientResolvedConfig
> {
  readonly input: DescribeCustomDomainsCommandInput;
  constructor(input: DescribeCustomDomainsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppRunnerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeCustomDomainsCommandInput, DescribeCustomDomainsCommandOutput>;
  private serialize;
  private deserialize;
}
