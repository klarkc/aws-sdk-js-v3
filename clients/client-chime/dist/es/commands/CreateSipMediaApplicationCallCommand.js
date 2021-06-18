import { __extends } from "tslib";
import { CreateSipMediaApplicationCallRequest, CreateSipMediaApplicationCallResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateSipMediaApplicationCallCommand,
  serializeAws_restJson1CreateSipMediaApplicationCallCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an outbound call to a phone number from the phone number specified in the request, and it invokes the endpoint of the specified
 * <code>sipMediaApplicationId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, CreateSipMediaApplicationCallCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, CreateSipMediaApplicationCallCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new CreateSipMediaApplicationCallCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSipMediaApplicationCallCommandInput} for command's `input` shape.
 * @see {@link CreateSipMediaApplicationCallCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateSipMediaApplicationCallCommand = /** @class */ (function (_super) {
  __extends(CreateSipMediaApplicationCallCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateSipMediaApplicationCallCommand(input) {
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
  CreateSipMediaApplicationCallCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "CreateSipMediaApplicationCallCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateSipMediaApplicationCallRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateSipMediaApplicationCallResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateSipMediaApplicationCallCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateSipMediaApplicationCallCommand(input, context);
  };
  CreateSipMediaApplicationCallCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateSipMediaApplicationCallCommand(output, context);
  };
  return CreateSipMediaApplicationCallCommand;
})($Command);
export { CreateSipMediaApplicationCallCommand };
//# sourceMappingURL=CreateSipMediaApplicationCallCommand.js.map
