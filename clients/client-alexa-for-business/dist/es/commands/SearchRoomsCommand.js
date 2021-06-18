import { __extends } from "tslib";
import { SearchRoomsRequest, SearchRoomsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1SearchRoomsCommand,
  serializeAws_json1_1SearchRoomsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Searches rooms and lists the ones that meet a set of filter and sort
 *          criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, SearchRoomsCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, SearchRoomsCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new SearchRoomsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchRoomsCommandInput} for command's `input` shape.
 * @see {@link SearchRoomsCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SearchRoomsCommand = /** @class */ (function (_super) {
  __extends(SearchRoomsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function SearchRoomsCommand(input) {
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
  SearchRoomsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "SearchRoomsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: SearchRoomsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SearchRoomsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  SearchRoomsCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1SearchRoomsCommand(input, context);
  };
  SearchRoomsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1SearchRoomsCommand(output, context);
  };
  return SearchRoomsCommand;
})($Command);
export { SearchRoomsCommand };
//# sourceMappingURL=SearchRoomsCommand.js.map
