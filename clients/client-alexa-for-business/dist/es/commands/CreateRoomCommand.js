import { __extends } from "tslib";
import { CreateRoomRequest, CreateRoomResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateRoomCommand,
  serializeAws_json1_1CreateRoomCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a room with the specified details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, CreateRoomCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, CreateRoomCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new CreateRoomCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRoomCommandInput} for command's `input` shape.
 * @see {@link CreateRoomCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateRoomCommand = /** @class */ (function (_super) {
  __extends(CreateRoomCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateRoomCommand(input) {
    var _this =
      // Start section: command_constructor
      _super.call(this) || this;
    _this.input = input;
    return _this;
    // End section: command_constructor
  }
  /**
   * @internal
   */
  CreateRoomCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "CreateRoomCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateRoomRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateRoomResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateRoomCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1CreateRoomCommand(input, context);
  };
  CreateRoomCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1CreateRoomCommand(output, context);
  };
  return CreateRoomCommand;
})($Command);
export { CreateRoomCommand };
//# sourceMappingURL=CreateRoomCommand.js.map
