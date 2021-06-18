"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateChannelModeratorCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a new <code>ChannelModerator</code>. A channel moderator can:</p>
 *
 *          <ul>
 *             <li>
 *                <p>Add and remove other members of the channel.</p>
 *             </li>
 *             <li>
 *                <p>Add and remove other moderators of the channel.</p>
 *             </li>
 *             <li>
 *                <p>Add and remove user bans for the channel.</p>
 *             </li>
 *             <li>
 *                <p>Redact messages in the channel.</p>
 *             </li>
 *             <li>
 *                <p>List messages in the channel.</p>
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
 * import { ChimeClient, CreateChannelModeratorCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, CreateChannelModeratorCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new CreateChannelModeratorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateChannelModeratorCommandInput} for command's `input` shape.
 * @see {@link CreateChannelModeratorCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateChannelModeratorCommand extends smithy_client_1.Command {
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
    const commandName = "CreateChannelModeratorCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.CreateChannelModeratorRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.CreateChannelModeratorResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_restJson1_1.serializeAws_restJson1CreateChannelModeratorCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_restJson1_1.deserializeAws_restJson1CreateChannelModeratorCommand(output, context);
  }
}
exports.CreateChannelModeratorCommand = CreateChannelModeratorCommand;
//# sourceMappingURL=CreateChannelModeratorCommand.js.map
