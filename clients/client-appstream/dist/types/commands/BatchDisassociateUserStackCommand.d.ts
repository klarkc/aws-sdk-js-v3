import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { BatchDisassociateUserStackRequest, BatchDisassociateUserStackResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface BatchDisassociateUserStackCommandInput extends BatchDisassociateUserStackRequest {}
export interface BatchDisassociateUserStackCommandOutput extends BatchDisassociateUserStackResult, __MetadataBearer {}
/**
 * <p>Disassociates the specified users from the specified stacks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, BatchDisassociateUserStackCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, BatchDisassociateUserStackCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new BatchDisassociateUserStackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDisassociateUserStackCommandInput} for command's `input` shape.
 * @see {@link BatchDisassociateUserStackCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchDisassociateUserStackCommand extends $Command<
  BatchDisassociateUserStackCommandInput,
  BatchDisassociateUserStackCommandOutput,
  AppStreamClientResolvedConfig
> {
  readonly input: BatchDisassociateUserStackCommandInput;
  constructor(input: BatchDisassociateUserStackCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchDisassociateUserStackCommandInput, BatchDisassociateUserStackCommandOutput>;
  private serialize;
  private deserialize;
}
