import { __extends } from "tslib";
import { SearchAddressBooksRequest, SearchAddressBooksResponse } from "../models/models_0";
import {
  deserializeAws_json1_1SearchAddressBooksCommand,
  serializeAws_json1_1SearchAddressBooksCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Searches address books and lists the ones that meet a set of filter and sort
 *          criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, SearchAddressBooksCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, SearchAddressBooksCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new SearchAddressBooksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchAddressBooksCommandInput} for command's `input` shape.
 * @see {@link SearchAddressBooksCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SearchAddressBooksCommand = /** @class */ (function (_super) {
  __extends(SearchAddressBooksCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function SearchAddressBooksCommand(input) {
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
  SearchAddressBooksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "SearchAddressBooksCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: SearchAddressBooksRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SearchAddressBooksResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  SearchAddressBooksCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1SearchAddressBooksCommand(input, context);
  };
  SearchAddressBooksCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1SearchAddressBooksCommand(output, context);
  };
  return SearchAddressBooksCommand;
})($Command);
export { SearchAddressBooksCommand };
//# sourceMappingURL=SearchAddressBooksCommand.js.map
