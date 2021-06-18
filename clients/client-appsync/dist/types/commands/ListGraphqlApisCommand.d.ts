import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { ListGraphqlApisRequest, ListGraphqlApisResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListGraphqlApisCommandInput extends ListGraphqlApisRequest {}
export interface ListGraphqlApisCommandOutput extends ListGraphqlApisResponse, __MetadataBearer {}
/**
 * <p>Lists your GraphQL APIs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, ListGraphqlApisCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, ListGraphqlApisCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new ListGraphqlApisCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGraphqlApisCommandInput} for command's `input` shape.
 * @see {@link ListGraphqlApisCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListGraphqlApisCommand extends $Command<
  ListGraphqlApisCommandInput,
  ListGraphqlApisCommandOutput,
  AppSyncClientResolvedConfig
> {
  readonly input: ListGraphqlApisCommandInput;
  constructor(input: ListGraphqlApisCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListGraphqlApisCommandInput, ListGraphqlApisCommandOutput>;
  private serialize;
  private deserialize;
}
