import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { ListAssociatedFleetsRequest, ListAssociatedFleetsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListAssociatedFleetsCommandInput extends ListAssociatedFleetsRequest {}
export interface ListAssociatedFleetsCommandOutput extends ListAssociatedFleetsResult, __MetadataBearer {}
/**
 * <p>Retrieves the name of the fleet that is associated with the specified stack.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, ListAssociatedFleetsCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, ListAssociatedFleetsCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new ListAssociatedFleetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAssociatedFleetsCommandInput} for command's `input` shape.
 * @see {@link ListAssociatedFleetsCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAssociatedFleetsCommand extends $Command<
  ListAssociatedFleetsCommandInput,
  ListAssociatedFleetsCommandOutput,
  AppStreamClientResolvedConfig
> {
  readonly input: ListAssociatedFleetsCommandInput;
  constructor(input: ListAssociatedFleetsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAssociatedFleetsCommandInput, ListAssociatedFleetsCommandOutput>;
  private serialize;
  private deserialize;
}
