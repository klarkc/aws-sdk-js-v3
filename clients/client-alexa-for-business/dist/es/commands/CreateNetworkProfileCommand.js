import { __extends } from "tslib";
import { CreateNetworkProfileRequest, CreateNetworkProfileResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateNetworkProfileCommand,
  serializeAws_json1_1CreateNetworkProfileCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a network profile with the specified details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, CreateNetworkProfileCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, CreateNetworkProfileCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new CreateNetworkProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateNetworkProfileCommandInput} for command's `input` shape.
 * @see {@link CreateNetworkProfileCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateNetworkProfileCommand = /** @class */ (function (_super) {
  __extends(CreateNetworkProfileCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateNetworkProfileCommand(input) {
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
  CreateNetworkProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "CreateNetworkProfileCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateNetworkProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateNetworkProfileResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateNetworkProfileCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1CreateNetworkProfileCommand(input, context);
  };
  CreateNetworkProfileCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1CreateNetworkProfileCommand(output, context);
  };
  return CreateNetworkProfileCommand;
})($Command);
export { CreateNetworkProfileCommand };
//# sourceMappingURL=CreateNetworkProfileCommand.js.map
