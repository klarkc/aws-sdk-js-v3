import { __extends } from "tslib";
import { SearchDevicesRequest, SearchDevicesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1SearchDevicesCommand,
  serializeAws_json1_1SearchDevicesCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Searches devices and lists the ones that meet a set of filter criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, SearchDevicesCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, SearchDevicesCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new SearchDevicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchDevicesCommandInput} for command's `input` shape.
 * @see {@link SearchDevicesCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SearchDevicesCommand = /** @class */ (function (_super) {
  __extends(SearchDevicesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function SearchDevicesCommand(input) {
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
  SearchDevicesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "SearchDevicesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: SearchDevicesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SearchDevicesResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  SearchDevicesCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1SearchDevicesCommand(input, context);
  };
  SearchDevicesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1SearchDevicesCommand(output, context);
  };
  return SearchDevicesCommand;
})($Command);
export { SearchDevicesCommand };
//# sourceMappingURL=SearchDevicesCommand.js.map
