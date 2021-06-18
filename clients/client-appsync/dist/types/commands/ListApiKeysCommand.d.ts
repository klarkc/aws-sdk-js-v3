import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { ListApiKeysRequest, ListApiKeysResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListApiKeysCommandInput extends ListApiKeysRequest {}
export interface ListApiKeysCommandOutput extends ListApiKeysResponse, __MetadataBearer {}
/**
 * <p>Lists the API keys for a given API.</p>
 *          <note>
 *             <p>API keys are deleted automatically 60 days after they expire. However, they may
 *             still be included in the response until they have actually been deleted. You can safely
 *             call <code>DeleteApiKey</code> to manually delete a key before it's automatically
 *             deleted.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, ListApiKeysCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, ListApiKeysCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new ListApiKeysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListApiKeysCommandInput} for command's `input` shape.
 * @see {@link ListApiKeysCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListApiKeysCommand extends $Command<
  ListApiKeysCommandInput,
  ListApiKeysCommandOutput,
  AppSyncClientResolvedConfig
> {
  readonly input: ListApiKeysCommandInput;
  constructor(input: ListApiKeysCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListApiKeysCommandInput, ListApiKeysCommandOutput>;
  private serialize;
  private deserialize;
}
