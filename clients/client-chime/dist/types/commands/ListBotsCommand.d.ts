import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { ListBotsRequest, ListBotsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListBotsCommandInput extends ListBotsRequest {}
export interface ListBotsCommandOutput extends ListBotsResponse, __MetadataBearer {}
/**
 * <p>Lists the bots associated with the administrator's Amazon Chime Enterprise account ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListBotsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListBotsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ListBotsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBotsCommandInput} for command's `input` shape.
 * @see {@link ListBotsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListBotsCommand extends $Command<
  ListBotsCommandInput,
  ListBotsCommandOutput,
  ChimeClientResolvedConfig
> {
  readonly input: ListBotsCommandInput;
  constructor(input: ListBotsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListBotsCommandInput, ListBotsCommandOutput>;
  private serialize;
  private deserialize;
}
