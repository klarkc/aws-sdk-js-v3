"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListApiKeysCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Lists the API keys for a given API.</p>
 *          <note>
 *             <p>API keys are deleted automatically 60 days after they expire. However, they may
 *             still be included in the response until they have actually been deleted. You can safely
 *             call <code>DeleteApiKey</code> to manually delete a key before it's automatically
 *             deleted.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, ListApiKeysCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, ListApiKeysCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new ListApiKeysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListApiKeysCommandInput} for command's `input` shape.
 * @see {@link ListApiKeysCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListApiKeysCommand extends smithy_client_1.Command {
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
    const clientName = "AppSyncClient";
    const commandName = "ListApiKeysCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.ListApiKeysRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.ListApiKeysResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_restJson1_1.serializeAws_restJson1ListApiKeysCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_restJson1_1.deserializeAws_restJson1ListApiKeysCommand(output, context);
  }
}
exports.ListApiKeysCommand = ListApiKeysCommand;
//# sourceMappingURL=ListApiKeysCommand.js.map
