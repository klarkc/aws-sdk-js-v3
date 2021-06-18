"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMeetingDialOutCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Uses the join token and call metadata in a meeting request (From number, To number, and so forth) to initiate an outbound call to a public
 *     switched telephone network (PSTN) and join them into a Chime meeting. Also ensures that the From number belongs to the customer.</p>
 *
 *          <p>To play welcome audio or implement an interactive voice response (IVR), use the
 * <code>CreateSipMediaApplicationCall</code> action with the corresponding SIP media application ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, CreateMeetingDialOutCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, CreateMeetingDialOutCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new CreateMeetingDialOutCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMeetingDialOutCommandInput} for command's `input` shape.
 * @see {@link CreateMeetingDialOutCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateMeetingDialOutCommand extends smithy_client_1.Command {
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
    const commandName = "CreateMeetingDialOutCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.CreateMeetingDialOutRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.CreateMeetingDialOutResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_restJson1_1.serializeAws_restJson1CreateMeetingDialOutCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_restJson1_1.deserializeAws_restJson1CreateMeetingDialOutCommand(output, context);
  }
}
exports.CreateMeetingDialOutCommand = CreateMeetingDialOutCommand;
//# sourceMappingURL=CreateMeetingDialOutCommand.js.map
