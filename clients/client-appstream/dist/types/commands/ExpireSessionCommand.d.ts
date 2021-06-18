import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { ExpireSessionRequest, ExpireSessionResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ExpireSessionCommandInput extends ExpireSessionRequest {}
export interface ExpireSessionCommandOutput extends ExpireSessionResult, __MetadataBearer {}
/**
 * <p>Immediately stops the specified streaming session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, ExpireSessionCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, ExpireSessionCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new ExpireSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExpireSessionCommandInput} for command's `input` shape.
 * @see {@link ExpireSessionCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ExpireSessionCommand extends $Command<
  ExpireSessionCommandInput,
  ExpireSessionCommandOutput,
  AppStreamClientResolvedConfig
> {
  readonly input: ExpireSessionCommandInput;
  constructor(input: ExpireSessionCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExpireSessionCommandInput, ExpireSessionCommandOutput>;
  private serialize;
  private deserialize;
}
