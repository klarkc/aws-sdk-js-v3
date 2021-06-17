import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { CreateHITRequest, CreateHITResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateHITCommandInput extends CreateHITRequest {
}
export interface CreateHITCommandOutput extends CreateHITResponse, __MetadataBearer {
}
/**
 * <p>The <code>CreateHIT</code> operation creates a new Human Intelligence Task (HIT).
 *             The new HIT is made available for Workers to find and accept on the Amazon Mechanical
 *             Turk website. </p>
 *         <p>
 *             This operation allows you to specify a new HIT by passing in values for the properties of the HIT, such as its title, reward amount and number of assignments. When you pass these values to <code>CreateHIT</code>, a new HIT is created for you, with a new <code>HITTypeID</code>. The HITTypeID can be used to create additional HITs in the future without needing to specify common parameters such as the title, description and reward amount each time.</p>
 *         <p> An alternative way to create HITs is to first generate a HITTypeID using the <code>CreateHITType</code> operation and then call the <code>CreateHITWithHITType</code> operation. This is the recommended best practice for Requesters who are creating large numbers of HITs.
 *         </p>
 *
 *         <p>CreateHIT also supports several ways to provide question data: by providing a value
 *             for the <code>Question</code> parameter that fully specifies the contents of the HIT, or by providing
 *             a <code>HitLayoutId</code> and associated <code>HitLayoutParameters</code>.
 *         </p>
 *
 *         <note>
 *             <p> If a HIT is created with 10 or more maximum assignments, there is an additional fee. For more information, see
 *             <a href="https://requester.mturk.com/pricing">Amazon Mechanical Turk Pricing</a>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, CreateHITCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, CreateHITCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new CreateHITCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateHITCommandInput} for command's `input` shape.
 * @see {@link CreateHITCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateHITCommand extends $Command<CreateHITCommandInput, CreateHITCommandOutput, MTurkClientResolvedConfig> {
    readonly input: CreateHITCommandInput;
    constructor(input: CreateHITCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateHITCommandInput, CreateHITCommandOutput>;
    private serialize;
    private deserialize;
}
