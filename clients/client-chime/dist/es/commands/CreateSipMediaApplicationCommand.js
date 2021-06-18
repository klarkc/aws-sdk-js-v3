import { __extends } from "tslib";
import { CreateSipMediaApplicationRequest, CreateSipMediaApplicationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateSipMediaApplicationCommand,
  serializeAws_restJson1CreateSipMediaApplicationCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a SIP media application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, CreateSipMediaApplicationCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, CreateSipMediaApplicationCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new CreateSipMediaApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSipMediaApplicationCommandInput} for command's `input` shape.
 * @see {@link CreateSipMediaApplicationCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateSipMediaApplicationCommand = /** @class */ (function (_super) {
  __extends(CreateSipMediaApplicationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateSipMediaApplicationCommand(input) {
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
  CreateSipMediaApplicationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "CreateSipMediaApplicationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateSipMediaApplicationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateSipMediaApplicationResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateSipMediaApplicationCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateSipMediaApplicationCommand(input, context);
  };
  CreateSipMediaApplicationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateSipMediaApplicationCommand(output, context);
  };
  return CreateSipMediaApplicationCommand;
})($Command);
export { CreateSipMediaApplicationCommand };
//# sourceMappingURL=CreateSipMediaApplicationCommand.js.map
