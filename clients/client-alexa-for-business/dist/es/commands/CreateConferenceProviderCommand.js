import { __extends } from "tslib";
import { CreateConferenceProviderRequest, CreateConferenceProviderResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateConferenceProviderCommand,
  serializeAws_json1_1CreateConferenceProviderCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds a new conference provider under the user's AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, CreateConferenceProviderCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, CreateConferenceProviderCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new CreateConferenceProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateConferenceProviderCommandInput} for command's `input` shape.
 * @see {@link CreateConferenceProviderCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateConferenceProviderCommand = /** @class */ (function (_super) {
  __extends(CreateConferenceProviderCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateConferenceProviderCommand(input) {
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
  CreateConferenceProviderCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "CreateConferenceProviderCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateConferenceProviderRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateConferenceProviderResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateConferenceProviderCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1CreateConferenceProviderCommand(input, context);
  };
  CreateConferenceProviderCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1CreateConferenceProviderCommand(output, context);
  };
  return CreateConferenceProviderCommand;
})($Command);
export { CreateConferenceProviderCommand };
//# sourceMappingURL=CreateConferenceProviderCommand.js.map
