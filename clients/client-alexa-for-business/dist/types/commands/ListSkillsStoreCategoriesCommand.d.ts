import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { ListSkillsStoreCategoriesRequest, ListSkillsStoreCategoriesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListSkillsStoreCategoriesCommandInput extends ListSkillsStoreCategoriesRequest {}
export interface ListSkillsStoreCategoriesCommandOutput extends ListSkillsStoreCategoriesResponse, __MetadataBearer {}
/**
 * <p>Lists all categories in the Alexa skill store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, ListSkillsStoreCategoriesCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, ListSkillsStoreCategoriesCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new ListSkillsStoreCategoriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSkillsStoreCategoriesCommandInput} for command's `input` shape.
 * @see {@link ListSkillsStoreCategoriesCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListSkillsStoreCategoriesCommand extends $Command<
  ListSkillsStoreCategoriesCommandInput,
  ListSkillsStoreCategoriesCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  readonly input: ListSkillsStoreCategoriesCommandInput;
  constructor(input: ListSkillsStoreCategoriesCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSkillsStoreCategoriesCommandInput, ListSkillsStoreCategoriesCommandOutput>;
  private serialize;
  private deserialize;
}
