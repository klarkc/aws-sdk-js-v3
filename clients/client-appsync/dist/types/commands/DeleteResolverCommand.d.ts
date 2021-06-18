import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { DeleteResolverRequest, DeleteResolverResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteResolverCommandInput extends DeleteResolverRequest {}
export interface DeleteResolverCommandOutput extends DeleteResolverResponse, __MetadataBearer {}
/**
 * <p>Deletes a <code>Resolver</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, DeleteResolverCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, DeleteResolverCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new DeleteResolverCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteResolverCommandInput} for command's `input` shape.
 * @see {@link DeleteResolverCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteResolverCommand extends $Command<
  DeleteResolverCommandInput,
  DeleteResolverCommandOutput,
  AppSyncClientResolvedConfig
> {
  readonly input: DeleteResolverCommandInput;
  constructor(input: DeleteResolverCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteResolverCommandInput, DeleteResolverCommandOutput>;
  private serialize;
  private deserialize;
}
