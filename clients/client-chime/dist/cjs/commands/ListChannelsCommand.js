"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListChannelsCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Lists all Channels created under a single Chime App as a paginated list. You can specify filters to narrow results.</p>
 *
 *          <p class="title">
 *             <b>Functionality & restrictions</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>Use privacy = <code>PUBLIC</code> to retrieve all public channels in the account.</p>
 *             </li>
 *             <li>
 *                <p>Only an <code>AppInstanceAdmin</code> can set privacy = <code>PRIVATE</code> to list the
 *                     private channels in an account.</p>
 *             </li>
 *          </ul>
 *
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes
 *         the API call as the value in the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListChannelsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListChannelsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ListChannelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListChannelsCommandInput} for command's `input` shape.
 * @see {@link ListChannelsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListChannelsCommand extends smithy_client_1.Command {
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
    const commandName = "ListChannelsCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_1_1.ListChannelsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_1_1.ListChannelsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_restJson1_1.serializeAws_restJson1ListChannelsCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_restJson1_1.deserializeAws_restJson1ListChannelsCommand(output, context);
  }
}
exports.ListChannelsCommand = ListChannelsCommand;
//# sourceMappingURL=ListChannelsCommand.js.map
