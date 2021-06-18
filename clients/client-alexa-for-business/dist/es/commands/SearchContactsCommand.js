import { __extends } from "tslib";
import { SearchContactsRequest, SearchContactsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1SearchContactsCommand,
  serializeAws_json1_1SearchContactsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Searches contacts and lists the ones that meet a set of filter and sort
 *          criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, SearchContactsCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, SearchContactsCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new SearchContactsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchContactsCommandInput} for command's `input` shape.
 * @see {@link SearchContactsCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SearchContactsCommand = /** @class */ (function (_super) {
  __extends(SearchContactsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function SearchContactsCommand(input) {
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
  SearchContactsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "SearchContactsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: SearchContactsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SearchContactsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  SearchContactsCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1SearchContactsCommand(input, context);
  };
  SearchContactsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1SearchContactsCommand(output, context);
  };
  return SearchContactsCommand;
})($Command);
export { SearchContactsCommand };
//# sourceMappingURL=SearchContactsCommand.js.map
