import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { GetApiCacheRequest, GetApiCacheResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetApiCacheCommandInput extends GetApiCacheRequest {}
export interface GetApiCacheCommandOutput extends GetApiCacheResponse, __MetadataBearer {}
/**
 * <p>Retrieves an <code>ApiCache</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, GetApiCacheCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, GetApiCacheCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new GetApiCacheCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetApiCacheCommandInput} for command's `input` shape.
 * @see {@link GetApiCacheCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetApiCacheCommand extends $Command<
  GetApiCacheCommandInput,
  GetApiCacheCommandOutput,
  AppSyncClientResolvedConfig
> {
  readonly input: GetApiCacheCommandInput;
  constructor(input: GetApiCacheCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetApiCacheCommandInput, GetApiCacheCommandOutput>;
  private serialize;
  private deserialize;
}
