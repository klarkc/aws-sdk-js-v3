import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { CreateImageBuilderStreamingURLRequest, CreateImageBuilderStreamingURLResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface CreateImageBuilderStreamingURLCommandInput extends CreateImageBuilderStreamingURLRequest {}
export interface CreateImageBuilderStreamingURLCommandOutput
  extends CreateImageBuilderStreamingURLResult,
    __MetadataBearer {}
/**
 * <p>Creates a URL to start an image builder streaming session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, CreateImageBuilderStreamingURLCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, CreateImageBuilderStreamingURLCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new CreateImageBuilderStreamingURLCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateImageBuilderStreamingURLCommandInput} for command's `input` shape.
 * @see {@link CreateImageBuilderStreamingURLCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateImageBuilderStreamingURLCommand extends $Command<
  CreateImageBuilderStreamingURLCommandInput,
  CreateImageBuilderStreamingURLCommandOutput,
  AppStreamClientResolvedConfig
> {
  readonly input: CreateImageBuilderStreamingURLCommandInput;
  constructor(input: CreateImageBuilderStreamingURLCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateImageBuilderStreamingURLCommandInput, CreateImageBuilderStreamingURLCommandOutput>;
  private serialize;
  private deserialize;
}
