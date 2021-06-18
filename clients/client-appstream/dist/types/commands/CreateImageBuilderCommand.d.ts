import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { CreateImageBuilderRequest, CreateImageBuilderResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface CreateImageBuilderCommandInput extends CreateImageBuilderRequest {}
export interface CreateImageBuilderCommandOutput extends CreateImageBuilderResult, __MetadataBearer {}
/**
 * <p>Creates an image builder. An image builder is a virtual machine that is used to create an image.</p>
 *         <p>The initial state of the builder is <code>PENDING</code>. When it is ready, the state is <code>RUNNING</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, CreateImageBuilderCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, CreateImageBuilderCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new CreateImageBuilderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateImageBuilderCommandInput} for command's `input` shape.
 * @see {@link CreateImageBuilderCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateImageBuilderCommand extends $Command<
  CreateImageBuilderCommandInput,
  CreateImageBuilderCommandOutput,
  AppStreamClientResolvedConfig
> {
  readonly input: CreateImageBuilderCommandInput;
  constructor(input: CreateImageBuilderCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateImageBuilderCommandInput, CreateImageBuilderCommandOutput>;
  private serialize;
  private deserialize;
}
