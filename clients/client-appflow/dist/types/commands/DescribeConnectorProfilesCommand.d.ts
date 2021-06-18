import { AppflowClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppflowClient";
import { DescribeConnectorProfilesRequest, DescribeConnectorProfilesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DescribeConnectorProfilesCommandInput extends DescribeConnectorProfilesRequest {}
export interface DescribeConnectorProfilesCommandOutput extends DescribeConnectorProfilesResponse, __MetadataBearer {}
/**
 * <p>
 *   Returns a list of <code>connector-profile</code> details matching the provided <code>connector-profile</code> names and <code>connector-types</code>. Both input lists are optional, and you can use them to filter the result. </p>
 *          <p>If no names or <code>connector-types</code> are provided, returns all connector profiles in a paginated form. If there is no match, this operation returns an empty list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, DescribeConnectorProfilesCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, DescribeConnectorProfilesCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * const client = new AppflowClient(config);
 * const command = new DescribeConnectorProfilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConnectorProfilesCommandInput} for command's `input` shape.
 * @see {@link DescribeConnectorProfilesCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeConnectorProfilesCommand extends $Command<
  DescribeConnectorProfilesCommandInput,
  DescribeConnectorProfilesCommandOutput,
  AppflowClientResolvedConfig
> {
  readonly input: DescribeConnectorProfilesCommandInput;
  constructor(input: DescribeConnectorProfilesCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppflowClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeConnectorProfilesCommandInput, DescribeConnectorProfilesCommandOutput>;
  private serialize;
  private deserialize;
}
