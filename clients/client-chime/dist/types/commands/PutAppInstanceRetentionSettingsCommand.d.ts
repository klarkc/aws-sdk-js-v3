import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { PutAppInstanceRetentionSettingsRequest, PutAppInstanceRetentionSettingsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface PutAppInstanceRetentionSettingsCommandInput extends PutAppInstanceRetentionSettingsRequest {}
export interface PutAppInstanceRetentionSettingsCommandOutput
  extends PutAppInstanceRetentionSettingsResponse,
    __MetadataBearer {}
/**
 * <p>Sets the amount of time in days that a given <code>AppInstance</code> retains data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, PutAppInstanceRetentionSettingsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, PutAppInstanceRetentionSettingsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new PutAppInstanceRetentionSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAppInstanceRetentionSettingsCommandInput} for command's `input` shape.
 * @see {@link PutAppInstanceRetentionSettingsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutAppInstanceRetentionSettingsCommand extends $Command<
  PutAppInstanceRetentionSettingsCommandInput,
  PutAppInstanceRetentionSettingsCommandOutput,
  ChimeClientResolvedConfig
> {
  readonly input: PutAppInstanceRetentionSettingsCommandInput;
  constructor(input: PutAppInstanceRetentionSettingsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutAppInstanceRetentionSettingsCommandInput, PutAppInstanceRetentionSettingsCommandOutput>;
  private serialize;
  private deserialize;
}
