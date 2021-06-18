import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { ListSkillsStoreSkillsByCategoryRequest, ListSkillsStoreSkillsByCategoryResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListSkillsStoreSkillsByCategoryCommandInput extends ListSkillsStoreSkillsByCategoryRequest {}
export interface ListSkillsStoreSkillsByCategoryCommandOutput
  extends ListSkillsStoreSkillsByCategoryResponse,
    __MetadataBearer {}
/**
 * <p>Lists all skills in the Alexa skill store by category.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, ListSkillsStoreSkillsByCategoryCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, ListSkillsStoreSkillsByCategoryCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new ListSkillsStoreSkillsByCategoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSkillsStoreSkillsByCategoryCommandInput} for command's `input` shape.
 * @see {@link ListSkillsStoreSkillsByCategoryCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListSkillsStoreSkillsByCategoryCommand extends $Command<
  ListSkillsStoreSkillsByCategoryCommandInput,
  ListSkillsStoreSkillsByCategoryCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  readonly input: ListSkillsStoreSkillsByCategoryCommandInput;
  constructor(input: ListSkillsStoreSkillsByCategoryCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSkillsStoreSkillsByCategoryCommandInput, ListSkillsStoreSkillsByCategoryCommandOutput>;
  private serialize;
  private deserialize;
}
