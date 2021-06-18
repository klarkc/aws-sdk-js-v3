import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { CreateSipRuleRequest, CreateSipRuleResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface CreateSipRuleCommandInput extends CreateSipRuleRequest {}
export interface CreateSipRuleCommandOutput extends CreateSipRuleResponse, __MetadataBearer {}
/**
 * <p>Creates a SIP rule which can be used to run a SIP media application as a target for a specific trigger type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, CreateSipRuleCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, CreateSipRuleCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new CreateSipRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSipRuleCommandInput} for command's `input` shape.
 * @see {@link CreateSipRuleCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateSipRuleCommand extends $Command<
  CreateSipRuleCommandInput,
  CreateSipRuleCommandOutput,
  ChimeClientResolvedConfig
> {
  readonly input: CreateSipRuleCommandInput;
  constructor(input: CreateSipRuleCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSipRuleCommandInput, CreateSipRuleCommandOutput>;
  private serialize;
  private deserialize;
}
