import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { ListAttachedIndicesRequest, ListAttachedIndicesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListAttachedIndicesCommandInput extends ListAttachedIndicesRequest {}
export interface ListAttachedIndicesCommandOutput extends ListAttachedIndicesResponse, __MetadataBearer {}
/**
 * <p>Lists indices attached to the specified object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListAttachedIndicesCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ListAttachedIndicesCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new ListAttachedIndicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAttachedIndicesCommandInput} for command's `input` shape.
 * @see {@link ListAttachedIndicesCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAttachedIndicesCommand extends $Command<
  ListAttachedIndicesCommandInput,
  ListAttachedIndicesCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  readonly input: ListAttachedIndicesCommandInput;
  constructor(input: ListAttachedIndicesCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAttachedIndicesCommandInput, ListAttachedIndicesCommandOutput>;
  private serialize;
  private deserialize;
}
