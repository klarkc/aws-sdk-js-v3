"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAccountsCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Lists the Amazon Chime accounts under the administrator's AWS account. You can filter accounts
 *             by account name prefix. To find out which Amazon Chime account a user belongs to, you can
 *             filter by the user's email address, which returns one account result.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListAccountsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListAccountsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ListAccountsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAccountsCommandInput} for command's `input` shape.
 * @see {@link ListAccountsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListAccountsCommand extends smithy_client_1.Command {
  // Start section: command_properties
  // End section: command_properties
  constructor(input) {
    // Start section: command_constructor
    super();
    this.input = input;
    // End section: command_constructor
  }
  /**
   * @internal
   */
  resolveMiddleware(clientStack, configuration, options) {
    this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
    const stack = clientStack.concat(this.middlewareStack);
    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "ListAccountsCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_1_1.ListAccountsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_1_1.ListAccountsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_restJson1_1.serializeAws_restJson1ListAccountsCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_restJson1_1.deserializeAws_restJson1ListAccountsCommand(output, context);
  }
}
exports.ListAccountsCommand = ListAccountsCommand;
//# sourceMappingURL=ListAccountsCommand.js.map
